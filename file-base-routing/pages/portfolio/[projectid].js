import { useRouter } from 'next/router'

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to the backend server
  // to fetch the project data with the projectid of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  )
}
