import { useRouter } from 'next/router';

export default function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // router.push('/clients/max/projecta');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' }
    })
  }

  return (
    <div>
      <h1>The Project Page for a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}
