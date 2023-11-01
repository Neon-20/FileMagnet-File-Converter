import Code from "@/components/code";

const SetupPage = () => {
    return (
        <div className="space-y-16 mx-auto container items-center justify-center">
        <div className="space-y-6">
        <h1 className="text-center text-red-500 font-medium text-4xl md:text-5xl">
        Setup this project easily 🤓
        </h1>
        <div className="container items-center justify-center">
        <Code/>
        </div>
        </div>
        </div>
    );
}
export default SetupPage;