import {
    ArrowRight,

} from "lucide-react";

export default function QuickActionCard({
    icon,
    title,
    description,
    button,
}) {
    return (
        <div
            className="
        bg-slate-50
        border-gray-200
        rounded-2xl
        shadow-sm
        p-8
        flex
        flex-col
        min-h-56
        transition-all
        duration-300
        hover:shadow-xl
        cursor-pointer
      "
        >
            {/* Icon */}

            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2 flex-1">
                {description}
            </p>

            {/* Divider */}
            <div className="border-gray-200 my-5"></div>

            {/* Button */}
            <button
                className="
          self-end
          flex
          items-center
          gap-2
          bg-blue-600
          text-white
          px-3
          py-2
          rounded-lg
          hover:bg-blue-700
          transition-colors
        "
            >
                {button}
                <ArrowRight size={16} />
            </button>
        </div>
    );
}