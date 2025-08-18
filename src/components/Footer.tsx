function Footer() {
  return (
    <footer className='footer'>
      <p>
        © {new Date().getFullYear()} by{' '}
        <a href='https://github.com/Sampleq' target='_blank'>
          <i>Sampleq</i>
        </a>{' '}
        Igor M.{' '}
      </p>
      <p>
        Source code:{' '}
        <a
          href='https://github.com/Sampleq/job-listings-filtering-app-ts-react-redux'
          target='_blank'
        >
          GitHub Repo
        </a>
      </p>
    </footer>
  );
}

export default Footer;
