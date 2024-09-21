# GeoTrivia

GeoTrivia is a full-stack web application built with Next.js and Sanity CMS, designed to provide an engaging quiz experience focused on geography.

## Technologies Used

- Next.js 14.2.11
- React 18
- TypeScript
- Tailwind CSS
- Clerk for authentication
- Prisma with MongoDB
- Sanity CMS

## Code Reflection

This project demonstrates a solid understanding of modern web development practices. The use of Next.js with the App Router showcases an appreciation for performance and SEO. The integration of Clerk for authentication and Sanity for content management indicates a focus on leveraging powerful third-party services. The custom LayoutProvider shows thoughtful architecture, although there's room for improvement in error handling and state management. Overall, the code reflects a good balance between functionality and maintainability, with potential for further optimization and feature expansion.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB instance
- Sanity account
- Clerk account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/geotrivia.git
   cd geotrivia
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   DATABASE_URL=your_mongodb_connection_string
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset_name
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Sanity Studio

To run Sanity Studio locally:

1. Navigate to the Sanity Studio directory:
   ```
   cd sanity-studio
   ```

2. Start the Sanity Studio development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3333](http://localhost:3333) to access Sanity Studio.

## Project Structure

- `app/`: Next.js 13+ App Router pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and shared code
- `providers/`: Custom React context providers
- `public/`: Static assets
- `sanity-studio/`: Sanity Studio configuration and schemas

## Features

- User authentication with Clerk
- Dynamic quiz content managed through Sanity CMS
- Responsive design with Tailwind CSS
- Server-side rendering with Next.js
- API routes for backend functionality

