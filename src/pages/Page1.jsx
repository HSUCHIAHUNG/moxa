import { Link } from 'react-router-dom';

function Page1() {
  const Prouduct = [
    { id: "p1", title: "Prouduct1" },
    { id: "p2", title: "Prouduct2" },
    { id: "p3", title: "Prouduct3" },
  ];
  return (
    <>
      <p>page1</p>
      <ul className='flex gap-[10px]'>
        {Prouduct.map((prod) => (
          <li key={prod.id}>
            <Link to={`/page1/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Page1;

// export async function loader() {
//   const res = await fetch('');
//   if(!res.ok) {
//     console.log(res)
//   } else {
//     return res
//   }
// }
