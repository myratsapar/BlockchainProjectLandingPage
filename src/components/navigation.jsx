export const Navigation = () => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            DASHONE
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='' className=''>
                Home
              </a>
            </li>
            <li>
              <a href='' className=''>
                Services
              </a>
            </li>
            <li>
              <a href='' className=''>
                Pricing
              </a>
            </li>
            <li>
              <a href='' className=''>
                Team
              </a>
            </li>
            <li>
              <a href='' className=''>
                Contact
              </a>
            </li>
            <li>
              <a href='' className=''>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
