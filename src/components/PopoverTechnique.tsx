import * as Popover from '@radix-ui/react-popover';
import { Info, X } from 'phosphor-react';

const PopoverTechnique = () => {
  return (
    <div className='flex items-center justify-center w-1/5 text-white font-mainfont text-sm gap-4'>
          <Popover.Root>
              <Popover.Trigger className='bg-gradient-to-br from-white/10 to-white/20 backdrop-opacity-80 shadow-xl p-1 rounded-lg hover:bg-white/5 hover:scale-110 transition-all duration-300'>
                    <Info size={28} weight='bold'/>
              </Popover.Trigger>
              <Popover.Portal>
                  <Popover.Content avoidCollisions={true} side='top' sideOffset={20} className='bg-white/80 p-2 flex flex-col rounded-xl gap-4'>
                    <Popover.Close>
                        <X size={24}/>
                      </Popover.Close>
                        <div className='font-mainfont font-bold flex flex-col gap-6'>
                            <div>
                                <h1 className='font-handLetter text-xl font-extrabold text-center'>What is the pomodoro technique?</h1>
                                <h4 className='font-extrabold text-center'>A method for staying focused and mentally fresh</h4>
                            </div>
                            <div className='flex flex-col gap-3 w-full justify-center'>
                                <div className='flex items-center gap-8'>
                                    <p>STEP 1</p>
                                    <p>Pick a tesk ✏️</p>
                                    
                                </div>
                                <div className='flex items-center gap-8'>
                                    <p>STEP 2</p>
                                    <p>Set a 25 minutes timer ⌛</p>
                                </div>
                                <div className='flex items-center gap-8'>
                                    <p>STEP 3</p>
                                    <p>Work on it until time is up 👨‍💻</p>
                                </div>
                                <div className='flex items-center gap-8'>
                                    <p>STEP 4</p>
                                    <p>Take a 5 minute break ☕</p>
                                </div>
                                <div className='flex items-center gap-8'>
                                    <p>STEP 5</p>
                                    <p>Every 4 pomodoros, take a long break 🌳</p>
                                </div>
                            </div>
                        </div>  
                      <Popover.Arrow className='fill-white/80'/>  
                  </Popover.Content>
              </Popover.Portal>
          </Popover.Root>
          </div>
  )
}

export default PopoverTechnique