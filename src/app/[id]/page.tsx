import React from 'react'

export type pageProps = {
    params: {id: string | undefined};
    searchParams?:{ [key:string]: string | string[]|undefined};
};

export default function page(props: pageProps) {
  return (
    <div>page</div>
  )
}
