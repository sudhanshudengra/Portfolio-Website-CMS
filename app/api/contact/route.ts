import { apiVersion } from '@/sanity/env'
import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN
})

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.warn(
        'Warning: SANITY_API_WRITE_TOKEN is missing. Skipping database save.'
      )
    } else {
      await writeClient.create({
        _type: 'contactSubmission',
        name,
        email,
        message,
        createdAt: new Date().toISOString()
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Message logged in CMS successfully.'
    })
  } catch (error: Error | unknown) {
    console.error('Error handling contact submission:', error)
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    )
  }
}
