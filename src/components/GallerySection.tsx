import productsImage from "@/assets/sanyu-products.jpg";
import warehouseImage from "@/assets/sanyu-warehouse.jpg";
import packagingImage from "@/assets/sanyu-packaging.jpg";
import heroImage from "@/assets/sanyu-hero-team.jpg";
const galleryItems = [{
  image: "/lovable-uploads/0dfa220a-4dec-44dd-b446-e9f3552a7bd1.png",
  title: "Inspeção de Qualidade",
  description: "Cada produto é cuidadosamente inspecionado pela nossa equipe"
}, {
  image: "/lovable-uploads/d9bd7ad3-5bfb-4798-88fe-7fadf7355794.png",
  title: "Embalagens Personalizadas",
  description: "Packaging exclusivo com sua marca e identidade visual"
}, {
  image: warehouseImage,
  title: "Centro de Distribuição",
  description: "Operação moderna e eficiente na China"
}, {
  image: "/lovable-uploads/5c933edc-a304-45b8-8164-6503b460f1c0.png",
  title: "Equipe Especializada",
  description: "Profissionais dedicados ao seu sucesso"
}];
const GallerySection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja nosso <span className="text-sanyu-blue">trabalho</span> de perto
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparência total: conheça nossa operação, equipe e os cuidados que temos com cada produto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-slate-800 bg-[081921]">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            </div>)}
        </div>

        {/* Process Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-sanyu-blue-light rounded-2xl">
            <div className="text-2xl font-bold text-sanyu-blue mb-2">100%</div>
            <div className="font-semibold mb-2">Produtos Inspecionados</div>
            <div className="text-sm text-muted-foreground">Garantia de qualidade em cada item</div>
          </div>
          
          <div className="text-center p-6 bg-sanyu-blue-light rounded-2xl">
            <div className="text-2xl font-bold text-sanyu-blue mb-2">24h</div>
            <div className="font-semibold mb-2">Processamento Rápido</div>
            <div className="text-sm text-muted-foreground">Envio no mesmo dia do pedido</div>
          </div>
          
          <div className="text-center p-6 bg-sanyu-blue-light rounded-2xl">
            <div className="text-2xl font-bold text-sanyu-blue mb-2">∞</div>
            <div className="font-semibold mb-2">Possibilidades de Customização</div>
            <div className="text-sm text-muted-foreground">Personalize como quiser</div>
          </div>
        </div>
      </div>
    </section>;
};
export default GallerySection;