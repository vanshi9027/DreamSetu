export default function Logo() {
    return (
        <div className="flex items-center gap-3 cursor-pointer">

            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
            </div>

            <div>
                <h1 className="text-xl font-bold text-gray-900">
                    DreamSetu
                </h1>

                <p className="text-xs text-gray-500">
                    Learn • Build • Grow
                </p>
            </div>

        </div>
    );
}