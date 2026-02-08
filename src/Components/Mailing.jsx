import React from 'react'

const Mailing = () => {
  return (
    <div className='px-8 h-screen w-full overflow-hidden flex items-center justify-center gap-2 bg-[#FFFEF7]'>

      <div className='h-[70vh] w-[40%]  font-[Light] flex flex-col gap-3'>

        <div className='overflow-hidden font-[Regular]'>
          <h1>GET IN TOUCH</h1>
        </div>

        <div className='overflow-hidden h-max py-3'>
          <h1 className='text-8xl'>Speak to us.</h1>
        </div>

        <div className='overflow-hidden w-[80%]'>
          <p>If you want to start a project, share an idea or simply say hi,
            we want to hear from you.</p>
        </div>

      </div>

      <div className='h-[70vh] w-[60%] bg-teal-300'>

      </div>

    </div>
  )
}

export default Mailing
