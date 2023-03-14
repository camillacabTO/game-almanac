export default function page() {
  return (
    <div className='flex items-center justify-center h-[70%]'>
      <form className='w-full sm:w-1/3 text-center'>
        <h1 className='my-11 text-lg'>Sign In here</h1>
        <button className='btn btn-active btn-primary w-full'>
          Sign In With Google
        </button>
        <div className='mx-auto my-8 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
          or
        </div>
        <button className='btn btn-active btn-accent w-full'>
          Sign In With Github
        </button>
      </form>
    </div>
  )
}
