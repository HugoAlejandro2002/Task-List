export const Modal = ({ title, children }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 grid place-content-center">
            <div className="grid justify-center">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
};
