import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface QuizState {
  step: number;
  budget: string;
  market: string;
  priority: string;
  name: string;
  phone: string;
  email: string;
}

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [quiz, setQuiz] = useState<QuizState>({
    step: 1,
    budget: '',
    market: '',
    priority: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleQuizAnswer = (field: keyof QuizState, value: string) => {
    setQuiz(prev => ({ ...prev, [field]: value }));
    if (quiz.step < 4) {
      setQuiz(prev => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const resetQuiz = () => {
    setQuiz({
      step: 1,
      budget: '',
      market: '',
      priority: '',
      name: '',
      phone: '',
      email: ''
    });
  };

  const handleQuizSubmit = () => {
    console.log('Quiz submitted:', quiz);
    setQuizOpen(false);
    resetQuiz();
  };

  const QuizContent = () => {
    switch (quiz.step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-semibold text-charcoal-900 mb-2">
                Какой бюджет вы рассматриваете?
              </h3>
              <p className="text-charcoal-600">Шаг 1 из 3</p>
            </div>
            <div className="space-y-3">
              {[
                'До $250k',
                '$250k - $500k', 
                '$500k - $1M',
                'Более $1M'
              ].map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="w-full h-14 text-left justify-start hover:bg-gold-50 hover:border-gold-500 transition-all duration-200"
                  onClick={() => handleQuizAnswer('budget', option)}
                >
                  <Icon name="DollarSign" className="mr-3 h-5 w-5 text-gold-500" />
                  {option}
                </Button>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-semibold text-charcoal-900 mb-2">
                Какой рынок вас интересует?
              </h3>
              <p className="text-charcoal-600">Шаг 2 из 3</p>
            </div>
            <div className="space-y-3">
              {[
                'Динамичный Дубай (ОАЭ)',
                'Перспективный Оман',
                'Рассматриваю оба варианта',
                'Пока не знаю'
              ].map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="w-full h-14 text-left justify-start hover:bg-gold-50 hover:border-gold-500 transition-all duration-200"
                  onClick={() => handleQuizAnswer('market', option)}
                >
                  <Icon name="MapPin" className="mr-3 h-5 w-5 text-gold-500" />
                  {option}
                </Button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-semibold text-charcoal-900 mb-2">
                Что для вас приоритетно?
              </h3>
              <p className="text-charcoal-600">Шаг 3 из 3</p>
            </div>
            <div className="space-y-3">
              {[
                'Максимальная доходность',
                'Рост стоимости актива',
                'Получение ВНЖ',
                'Сохранение капитала'
              ].map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="w-full h-14 text-left justify-start hover:bg-gold-50 hover:border-gold-500 transition-all duration-200"
                  onClick={() => handleQuizAnswer('priority', option)}
                >
                  <Icon name="Target" className="mr-3 h-5 w-5 text-gold-500" />
                  {option}
                </Button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-semibold text-charcoal-900 mb-2">
                Идеальное решение готово!
              </h3>
              <p className="text-charcoal-600">Оставьте контакты для получения персональной подборки</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  value={quiz.name}
                  onChange={(e) => setQuiz(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={quiz.phone}
                  onChange={(e) => setQuiz(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={quiz.email}
                  onChange={(e) => setQuiz(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <Button 
                className="w-full bg-gold-500 hover:bg-gold-600 text-white h-12 text-lg font-semibold"
                onClick={handleQuizSubmit}
                disabled={!quiz.phone}
              >
                Получить подборку
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-pearl-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.4)), url('/img/b97d2fe2-1e19-4a8e-8048-3c442e59cb27.jpg')`
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Премиум-апартаменты <br />
            <span className="text-gold-500">в ОАЭ и Омане</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Ваш пассивный доход от 12% годовых
          </p>
          <p className="text-lg mb-10 text-pearl-200 max-w-2xl mx-auto">
            Персональный подбор ликвидных объектов инвестиции с полным сопровождением и юридической гарантией
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-semibold">
              <Icon name="Download" className="mr-2" />
              Получить каталог объектов
            </Button>
          </div>

          {/* Quiz Banner */}
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-gold-500/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-semibold mb-3 text-white">
                Персональная подборка
              </h3>
              <p className="text-pearl-200 mb-4">
                Ответьте на 3 вопроса и получите персональную подборку объектов
              </p>
              <Button 
                className="w-full bg-gold-500 hover:bg-gold-600 text-white"
                onClick={() => setQuizOpen(true)}
              >
                Начать
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-charcoal-900 mb-16">
            Ключевые преимущества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'TrendingUp',
                title: 'Доходность от 12%',
                description: 'Проработанная модель аренды с гарантированной доходностью'
              },
              {
                icon: 'Users',
                title: 'Команда экспертов',
                description: 'Специалисты на местах в Дубае и Маскате. Доступ к эксклюзивным лотам'
              },
              {
                icon: 'Shield',
                title: 'Полное сопровождение',
                description: 'От подбора и сделки до управления и отчетности под ключ'
              },
              {
                icon: 'Award',
                title: 'Юридическая защита',
                description: 'Аудит каждого объекта и сопровождение местным юристом'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-pearl-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon} className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-charcoal-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Cases */}
      <section className="py-20 bg-pearl-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-charcoal-900 mb-16">
            Инвестиционные кейсы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {
                image: '/img/e9ae5aac-5fd3-4c1d-9f9b-40b860eb9994.jpg',
                title: 'Апартаменты в Дубай Марине',
                price: '$580,000',
                yield: '13.5%',
                location: 'Dubai Marina, ОАЭ'
              },
              {
                image: '/img/d1e9eaa9-1cb1-46c5-8978-1156190bae78.jpg',
                title: 'Резиденция в Маскате',
                price: '$320,000',
                yield: '12.8%',
                location: 'Muscat Hills, Оман'
              },
              {
                image: '/img/b97d2fe2-1e19-4a8e-8048-3c442e59cb27.jpg',
                title: 'Пентхаус в Downtown',
                price: '$1,200,000',
                yield: '14.2%',
                location: 'Downtown Dubai, ОАЭ'
              }
            ].map((property, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-gold-500 text-white">
                    {property.yield} годовых
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-charcoal-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-charcoal-600 mb-3 flex items-center">
                    <Icon name="MapPin" className="w-4 h-4 mr-1" />
                    {property.location}
                  </p>
                  <p className="text-2xl font-playfair font-bold text-gold-500">
                    {property.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-50">
              Посмотреть другие кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 mb-8">
            О нас
          </h2>
          <p className="text-xl text-charcoal-600 mb-12 leading-relaxed">
            <span className="font-playfair font-semibold text-gold-500">Global Estates</span> — это более 150 довольных инвесторов 
            и $100M+ проданной недвижимости. Мы ваш надежный партнер в регионе.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['EMAAR', 'DAMAC', 'OMRAN', 'DUBAI HOLDINGS', 'ALDAR'].map((partner, index) => (
              <div key={index} className="text-xl font-semibold text-charcoal-400">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single CTA Section */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
            Готовы сделать первый шаг к пассивному доходу?
          </h2>
          <p className="text-xl text-pearl-200 mb-12">
            Заполните форму ниже, и наш эксперт свяжется с вами в течение 15 минут
          </p>
          
          <Card className="max-w-md mx-auto bg-white">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="border-pearl-300 focus:border-gold-500"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Ваш телефон" 
                    type="tel"
                    className="border-pearl-300 focus:border-gold-500"
                  />
                </div>
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white h-12 text-lg font-semibold">
                  Обсудить инвестицию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal-800 text-pearl-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-gold-500 mb-4">
                Global Estates
              </h3>
              <p className="text-pearl-300">
                Премиальная недвижимость в ОАЭ и Омане
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  +971 50 123 4567
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  info@global-estates.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="MessageCircle" className="w-6 h-6 hover:text-gold-500 cursor-pointer transition-colors" />
                <Icon name="Instagram" className="w-6 h-6 hover:text-gold-500 cursor-pointer transition-colors" />
                <Icon name="Linkedin" className="w-6 h-6 hover:text-gold-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-charcoal-600 pt-6 text-center text-pearl-400">
            <p>&copy; 2024 Global Estates. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Quiz Dialog */}
      <Dialog open={quizOpen} onOpenChange={setQuizOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl text-charcoal-900">
              Персональная подборка
            </DialogTitle>
            <DialogDescription>
              Ответьте на несколько вопросов для получения идеального предложения
            </DialogDescription>
          </DialogHeader>
          <QuizContent />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;