import Image from 'next/image'


type Image = {
  image: any
  icon1: any
  icon2: any
}

export default function CircleDoctorImage({image,icon1,icon2}: Image){
  return (
    <div className='flex'>
      <div>
        <Image src={icon1} height={40} width={40} alt='icon'/>
      </div>
     <div>
        <div className='flex relative'>
          <div className='bg-background h-52 w-52 mt-10 rounded-ss-lg rounded-e-lg rounded-t-lg rounded-r-lg rounded-b-lg rotate-45 '></div>
          <div className='border-r-[100px] border-b-[100px] border-background-card z-20 h-60 w-60 absolute -left-4 mt-[143px] rounded-s-lg rounded-e-lg rounded-t-lg rounded-r-lg rounded-b-lg rotate-45'></div>
          <Image src={image} alt='Imagem do doutor' height={400} className='absolute ml-3'/>
        </div>
     </div>
     <div>
        <Image src={icon2} height={40} width={40} alt='icon'/>
      </div>
    </div>
  )
}