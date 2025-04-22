const Card = ({ children, className }) => {
    return <div className={`p-4 border rounded-lg shadow-md ${className}`}>{children}</div>;
};

const CardContent = ({ children }) => {
    return <div className="p-2">{children}</div>;
};

export { Card, CardContent };
