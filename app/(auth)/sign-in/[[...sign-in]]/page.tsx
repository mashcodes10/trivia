import { SignIn } from '@clerk/nextjs'

export default function Page() {
  console.log('Rendering SignIn page');
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-secondary">
      <h1 className="text-2xl mb-4">Sign In Page</h1>
      <SignIn />
      <p className="mt-4">If you can see this, the page is rendering correctly.</p>
    </div>
  )
}