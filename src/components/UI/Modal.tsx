import { Fragment, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Cross1Icon } from "@radix-ui/react-icons";

const Backdrop = (props: { onClick: () => void }) => {
	return (
		<div
			onClick={props.onClick}
			className="z-40 fixed top-0 left-0 w-full h-full opacity-20 bg-black"
		/>
	);
};

const ModalOverlay = ({
	children,
	title,
	onClick,
}: {
	children: React.ReactElement;
	title?: string;
	onClick: () => void;
}) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const centerModal = () => {
			const modal = modalRef.current;
			if (!modal) {
				return;
			}
			const leftPos = (window.innerWidth - modal.offsetWidth) / 2;
			const topPost = (window.innerHeight - modal.offsetHeight) / 2 - 50;
			modal.style.left = `${leftPos}px`;
			modal.style.top = `${topPost}px`;
		};

		centerModal();

		window.addEventListener("resize", centerModal);

		return () => {
			window.removeEventListener("resize", centerModal);
		};
	}, []);

	return (
		<div
			ref={modalRef}
			className="pb-6 rounded fixed z-50 bg-white shadow animate-zoomIn">
			<div className="py-4 rounded-t-xl font-bold text-2xl flex justify-between px-7 items-center space-x-40">
				<span>{title}</span>
				<Cross1Icon
					className="cursor-pointer hover:text-slate-700 transition hover:transition"
					onClick={onClick}
				/>
			</div>
			<div className="ml-7">{children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = ({
	children,
	onClick,
	title,
}: {
	children: React.ReactElement;
	onClick: () => void;
	title?: string;
}) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}

			{ReactDOM.createPortal(
				<ModalOverlay title={title} onClick={onClick}>
					{children}
				</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;
