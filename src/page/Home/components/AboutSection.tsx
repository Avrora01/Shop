// components/AboutSection.tsx

const AboutSection = () => {
  return (
    <div className="min-h-[900px] px-4 md:px-8 lg:px-16">
      <div className="pt-[1%]">
        <h1 className="text-[34px] font-bold uppercase text-center">О нас</h1>
        <h2 className="text-center text-[14px] text-gray-500 uppercase mb-10">
          Вдохновляем мир на путешествия
        </h2>
      </div>

      {/* Первая секция - Текст и изображение */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-6">
            МЫ
            <span className="text-base font-normal ml-2">
              — команда профессионалов, влюблённых в искусство путешествий
            </span>
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Наша история началась с мечты о том, чтобы сделать каждое
            путешествие незабываемым, каждое приключение уникальным.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Наша миссия — сделать путешествия доступными и незабываемыми. Мы
            предлагаем вам не просто туры, а волшебные истории, которые будут
            жить в вашем сердце навсегда. Независимо от того, ищете ли вы
            релакс на пляже, культурные изыски или экстремальные приключения,
            мы создадим для вас оптимальное путешествие, подстроенное под ваши
            уникальные желания.
          </p>
        </div>
        <div className="flex items-center justify-end">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
            alt="Travel professional"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Вторая секция - Изображение и текст */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex items-center justify-center order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop"
            alt="Tropical destination"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
        <div className="justify-center order-1 lg:order-2">
          <p className="text-gray-700 leading-relaxed mb-4">
            Мы гордимся нашей командой опытных специалистов, каждый из которых
            разделяет страсть к туризму и стремление сделать ваше путешествие
            незабываемым. Мы внимательно следим за последними тенденциями в
            индустрии, чтобы предложить вам только лучшие и самые актуальные
            варианты.
          </p>
        </div>
        <div className="justify-center order-1 lg:order-2">
          <p className="text-gray-700 leading-relaxed">
            Присоединяйтесь к нам в этом захватывающем путешествии! Мы готовы
            подарить вам моменты радости, вдохновения и удивления в каждом
            уголке нашего удивительного мира.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;