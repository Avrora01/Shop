// components/ContactFormSection.tsx

interface ContactFormSectionProps {
  backgroundImage: string;
  title1?: string;
  title2?: string;
  description?: string;
}

const ContactFormSection = ({
  backgroundImage,
  title1 = "НЕ ОПРЕДЕЛИЛИСЬ",
  title2 = "С ВЫБОРОМ?",
  description = "Оставьте свой номер и наш специалист поможет вам с подбором тура",
}: ContactFormSectionProps) => {
  return (
    <div
      className="min-h-[500px] bg-cover bg-center bg-no-repeat relative flex items-end pb-12 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl w-full mx-auto">
        <div className="flex items-center justify-between">
          {/* Левая часть - заголовок */}
          <div className="w-[40%]">
            <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
              {title1}
              <br />
              <span className="italic">{title2}</span>
            </h2>
          </div>

          {/* Средняя часть - текст */}
          <div className="w-[20%]">
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Правая часть - форма */}
          <div className="w-[20%]">
            <input
              type="text"
              placeholder="Имя"
              className="border-b-2 border-gray-300 focus:border-red-500 outline-none px-2 py-2 w-full sm:w-32 text-sm bg-transparent"
            />
            <br />
            <input
              type="tel"
              placeholder="Телефон"
              className="border-b-2 border-gray-300 focus:border-red-500 outline-none px-2 py-2 w-full sm:w-32 text-sm bg-transparent"
            />
          </div>

          <div className="w-[20%]">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full uppercase text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-lg">
              ОТПРАВИТЬ
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
