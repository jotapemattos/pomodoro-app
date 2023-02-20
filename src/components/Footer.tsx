import PopoverTechnique from './PopoverTechnique';

const Footer = () => {
  return (
    <div className='flex w-full h-footer p-2 justify-between items-center'>
        <span className='flex items-center justify-start pt-6 w-2/3 text-white font-mainfont text-xs xl:text-sm gap-4 h-full'>
            <p>Developed by <a href="https://github.com/jotapemattos" target='_blank'>João Pedro Mattos</a></p>
            <a href="https://github.com/jotapemattos" target='_blank'><img src="/github-mark.svg" alt="github-logo" className='hidden xl:flex w-6 h-6'/></a>
        </span>
        <div className='flex items-center justify-end pt-6 w-1/3 text-white font-mainfont text-xs gap-4 h-full'>
          <PopoverTechnique/> 
        </div> 
    </div>
  )
}

export default Footer