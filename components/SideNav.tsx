export default function SideNav() {
  return (
    <div className='bg-primary-content flex-initial w-52 hidden md:block'>
      <nav className='h-1/4'>
        <ul className='mt-6 flex flex-col justify-around h-full pl-6'>
          <li>
            <a href='#' className='hover:text-accent'>
              <span>Top Rated Games</span>
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-accent'>
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-accent'>
              <span>Favorite Games</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
