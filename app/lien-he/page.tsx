import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Liên Hệ</h2>
        <ContactForm />
      </section>
    </main>
  );
}