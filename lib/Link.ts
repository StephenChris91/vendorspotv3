// import { useRouter } from 'next/router'
// import Link from 'next/link'




// export default function LinkRoute(props: { children: React.ReactNode, href: string }) {
//   const router = useRouter()
//     const { children, href } = props;

//   const handleClick = (e: MouseEvent) => {
//     e.preventDefault()
//     router.push(href)
//   }

// //   return (
// //     <a href={href} onClick={handleClick}>
// //       {children}
// //     </a>
// //   )

//   return (
//         <Link href={href} onClick={handleClick} className="">
//             {children}
//         </Link>
//     )
// }