import { SaveCard, TakeScreenshot, ToggleDarkMode, ClearForm, StartParty, RandomTip, OpenFile, LockInterface, ToggleSettingsPanel } from './demo-cards';

export default function Demo() {
  return (
    <div className='flex flex-col items-center justify-center max-h-full w-full text-center pt-10'>
      <div className='flex flex-col items-center justify-center max-h-full w-full text-center pt-10'>
        <h1 className='text-4xl font-bold'>WebShorts Demo</h1>
        <p className='text-lg text-gray-600 dark:text-gray-300 max-w-xl'>This whole site is a demo of the WebShorts library, however, we&apos;ve added a few extra cards here to show off how it can be used!</p>
        <SaveCard />
        <TakeScreenshot />
        <ToggleDarkMode />
        <ClearForm />
        <StartParty />
        <RandomTip />
        <OpenFile />
        <LockInterface />
        <ToggleSettingsPanel />
      </div>
    </div>
  );
}
