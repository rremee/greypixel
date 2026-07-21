import {useState} from 'react';
import {motion, AnimatePresence} from "motion/react";
import MenuOverlay from "./MenuOverlay.jsx";

const topVariants = {
	closed: { rotate: 0, translateY: 0 },
	open: { rotate: 45, translateY: 9 },
};
const middleVariants = {
	closed: { scale: 1 },
	open: { scale: 0 },
};
const bottomVariants = {
	closed: { rotate: 0, translateY: 0 },
	open: { rotate: -45, translateY: -9 },
};

const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={'py-3 relative z-50'}>
			<div className="container flex items-center justify-between h-[clamp(3rem,4vw+2rem,3.5rem)] relative z-20">
				<a href="/" className={'logo h-full p-3'}>
					greypixel
				</a>
				<button
					className={'h-full flex justify-center items-center border border-grey-1c p-4.25 cursor-pointer'}
					onClick={() => setIsOpen(!isOpen)}
					aria-label={'Menu'}
					aria-expanded={isOpen}
				>
					<motion.div
						initial="closed"
						animate={isOpen ? 'open' : 'closed'}
						className={'relative w-6 h-4'}
					>
						<motion.span
							variants={topVariants}
							transition={{duration: 0.4, ease: 'easeInOut'}}
							className={'burger-span -top-0.75'}/>
						<motion.span
							variants={middleVariants}
							transition={{duration: 0.4}}
							className={'burger-span top-1/2 -translate-y-1/2'}/>
						<motion.span
							variants={bottomVariants}
							transition={{duration: 0.4, ease: 'easeInOut'}}
							className={'burger-span -bottom-0.75'}/>
					</motion.div>
				</button>
			</div>

			<AnimatePresence>
				{isOpen && <MenuOverlay />}
			</AnimatePresence>

		</header>
	)
}
export default Header
