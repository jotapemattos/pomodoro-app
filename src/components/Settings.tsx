import { Gear, X} from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import SettingsForm from './SettingsForm';

const Settings = () => {
  return (
    <div className='flex justify-center gap-2 items-center bg-gradient-to-br from-white/10 to-white/20 backdrop-opacity-80 shadow-xl rounded-xl h-timeOptions hover:scale-110 hover:bg-white/5 transition-all duration-300'>
      <Dialog.Root>
        <Dialog.Trigger
          type='button'
        >
          <div className='flex items-center gap-4 text-white font-mainfont font-extrabold text-xl p-4'>
            <span>Settings</span>
            <Gear size={32} weight='fill'/>
          </div>
        </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
              <Dialog.Content className='absolute p-10 bg-white/90 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8'>
                    <Dialog.Title className='font-handLetter text-2xl font-extrabold'>
                      Settings
                    </Dialog.Title>
                <SettingsForm/>
                <Dialog.Close className='bg-zinc-800/40 backdrop-opacity-80 shadow-xl w-full p-2 rounded-lg text-lg font-bold font-handLetter hover:bg-zinc-600/50 hover:scale-110 hover:cursor-pointer transition-all duration-300"'>
                  Apply!
                </Dialog.Close>
              </Dialog.Content>
          </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Settings