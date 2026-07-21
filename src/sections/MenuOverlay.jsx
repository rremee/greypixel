import {useState} from "react";
import { motion, AnimatePresence } from 'motion/react';
import {navLinks} from "../constants/index.jsx";

const MenuOverlay = () => {

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<motion.div
			initial={{scaleY:0}}
			animate={{scaleY:1}}
			exit={{scaleY:0}}
			transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
			style={{transformOrigin:'top'}}
			className={'fixed inset-0 bg-white flex'}
		>
			<div className="relative w-1/2 h-full overflow-hidden hidden lg:block">
				<AnimatePresence >
					<motion.img
						key={activeIndex}
						src={navLinks[activeIndex].image}
						alt={navLinks[activeIndex].label}
						initial={{ opacity: 0, scale: 1.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.1, duration: 0.7 }}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</AnimatePresence>
			</div>

			<nav className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-7 lg:gap-4 px-10 lg:px-32">
				{navLinks.map(({href, name},i) => (
					<motion.a
						key={href}
						href={href}
						onMouseEnter={() => setActiveIndex(i)}
						initial={{ opacity: 0, x: 24 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{duration: 0.4 }}
						className="nav-link text-grey-7c hover:text-grey-1c transition-colors duration-500 self-start"
					>
						{name}
					</motion.a>
				))}
			</nav>

		</motion.div>
	)
}
export default MenuOverlay
