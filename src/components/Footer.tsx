import PopoverTechnique from './PopoverTechnique';

const Footer = () => {
  return (
    <div className='flex w-full p-4 justify-between items-center'>
        <span className='flex items-center justify-center w-1/5 text-white font-mainfont text-sm gap-4'>
            <p>Developed by <a href="https://github.com/jotapemattos" target='_blank'>João Pedro Mattos</a></p>
            <a href="https://github.com/jotapemattos" target='_blank'><img src="/github-mark.svg" alt="github-logo" className='w-6 h-6'/></a>
        </span>
        <PopoverTechnique/>  
    </div>
  )
}

export default Footer