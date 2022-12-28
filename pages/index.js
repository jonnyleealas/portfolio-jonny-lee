import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/legacy/image';
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathon Lee Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Developed by</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li><a href="#"></a></li>
              <li><a className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a> </li>
              <li><a className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">LinkedIn</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Jonathon Lee</h2>
            <h3 className='text-2xl py-2'>Software Developer and IT Support</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              I love technology and writing software give me money
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin />
            <AiFillYoutube />
            <AiFillTwitterCircle />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>
        <div>
          <h3 className='text-3xl py-1'>Services I Offer</h3>
          <p className='text-md py-5 leading-8 text-gray-600'>
            Since the beginning of my journey as a freelance developer, Ive done remote work for
            <span className='text-teal-500'>blah blah blah</span> and consulted for <span className='text-teal-500'>blah blah blah</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className='text-md py-5 leading-8 text-gray-600'>
            Since the beginning of my journey as a freelance developer, Ive done remote work for
            <span className='text-teal-500'>blah blah blah</span> and consulted for <span className='text-teal-500'>blah blah blah</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={code} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='text-md py-5 leading-8 text-gray-600'>
            Since the beginning of my journey as a freelance developer, Ive done remote work for
            <span className='text-teal-500'>blah blah blah</span> and consulted for <span className='text-teal-500'>blah blah blah</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h4 className='py- text-teal-600'>Design Tools used</h4>
          <p className='text-gray-500'py-1 >Photoshop</p>
          <p className='text-gray-500'py-1 >Figma</p>
          <p className='text-gray-500'py-1 >Illustrator</p>
        <Image src={design} width={100} height={100} />
          <Image src={consulting} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={code} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='text-md py-5 leading-8 text-gray-600'>
            Since the beginning of my journey as a freelance developer, Ive done remote work for
            <span className='text-teal-500'>blah blah blah</span> and consulted for <span className='text-teal-500'>blah blah blah</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h4 className='py- text-teal-600'>Design Tools used</h4>
          <p className='text-gray-500'py-1 >Photoshop</p>
          <p className='text-gray-500'py-1 >Figma</p>
          <p className='text-gray-500'py-1 >Illustrator</p>
        <Image src={design} width={100} height={100} />
          <Image src={consulting} width={100} height={100} />
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={code} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='text-md py-5 leading-8 text-gray-600'>
            Since the beginning of my journey as a freelance developer, Ive done remote work for
            <span className='text-teal-500'>blah blah blah</span> and consulted for <span className='text-teal-500'>blah blah blah</span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h4 className='py- text-teal-600'>Design Tools used</h4>
          <p className='text-gray-500'py-1 >Photoshop</p>
          <p className='text-gray-500'py-1 >Figma</p>
          <p className='text-gray-500'py-1 >Illustrator</p>
        <Image src={design} width={100} height={100} />
          <Image src={consulting} width={100} height={100} />
        </div>
        <section>
          
        </section>
      </main>
    </>
  )
}
