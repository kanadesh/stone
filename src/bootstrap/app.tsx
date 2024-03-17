import { Button } from '@/components/ui/button'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from '@/components/ui/resizable'
import { Settings } from 'lucide-react'

const App = () => {
	return (
		<div className='flex h-screen w-full flex-col items-center align-middle'>
			<div className='w-full border-b border-stone-300 bg-stone-100 p-1'>
				<Button className='px-3' variant='default'>
					<Settings color='white' size={20} />
				</Button>
			</div>
			<ResizablePanelGroup direction='vertical' className='w-full grow'>
				<ResizablePanel defaultSize={60}>
					<ResizablePanelGroup direction='horizontal'>
						<ResizablePanel defaultSize={60}>
							<div className='flex h-full items-center justify-center p-6'>
								<span className='font-semibold'>Movie</span>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={40}>
							<div className='flex h-full items-center justify-center p-6'>
								<span className='font-semibold'>Config</span>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={60}>
					<div className='flex h-full items-center justify-center p-6'>
						<span className='font-semibold'>Editor</span>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}

export default App
