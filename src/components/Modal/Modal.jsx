export const Modal = ({ title, children, setModal }) => {
    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 grid place-content-center bg-transparent-black z-10"
            onClick={() => setModal(false)}
        >
            <div
                className="grid justify-center bg-slate-50 rounded-md p-5 gap-2"
                onClick={(e) => e.stopPropagation()}
            >
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
};
