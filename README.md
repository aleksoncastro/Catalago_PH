# Catálogo de Imóveis - PH Conecta Imóveis & BBusiness

Este projeto consiste em um **Catálogo de Imóveis Premium** desenvolvido sob a marca **PH Conecta Imóveis** em parceria com a **BBusiness Imobiliária**. O objetivo principal é exibir imóveis selecionados de forma sofisticada e direcionar os clientes interessados para as páginas de detalhes oficiais no site da BBusiness Imobiliária.

---

## 🎨 Design & Estética

O site foi desenvolvido seguindo os mais altos padrões de design moderno (Premium Clean):
* **Tema Claro (Light Mode)**: Cores suaves e elegantes (tons de azul ardósia, cinzas leves e branco puro) que proporcionam uma navegação agradável e leitura limpa.
* **Toque de Luxo**: Detalhes em dourado para botões e preços, comunicando valor e alto padrão.
* **Glassmorphism**: Cabeçalho fixo com fundo translúcido desfocado que se adapta ao conteúdo rolando por baixo.
* **Micro-animações**: Efeitos suaves ao passar o mouse sobre os cards (elevação 3D tridimensional e zoom sutil na foto do imóvel).
* **Responsividade Completa**: Layout fluído via CSS Grid e Flexbox que se adapta perfeitamente a dispositivos móveis, tablets e computadores de qualquer resolução.
* **Identidade Visual**: Logos das duas imobiliárias ampliadas e em destaque no topo (Header) e no rodapé (Footer).

---

## ⚙️ Funcionalidades

1. **Filtragem por Categorias**: Botões interativos que filtram instantaneamente os imóveis por tipo (Fazendas, Casas, Terrenos ou Outros).
2. **Pesquisa em Tempo Real**: Barra de busca inteligente que varre títulos, descrições e localizações para encontrar propriedades correspondentes em milissegundos enquanto o usuário digita.
3. **Links Externos Diretos**: Todos os cards funcionam como links diretos que abrem as respectivas páginas dos imóveis na BBusiness Imobiliária em uma nova aba (`target="_blank"`).

---

## 📁 Estrutura de Arquivos

O projeto está organizado e modularizado da seguinte forma:
```text
catalogo imovel/
├── assets/                  # Logos e imagens utilizadas no catálogo
│   ├── logo_ph.png
│   └── bbusiness_logo.png
├── index.html               # Estrutura HTML semântica e os cards dos imóveis
├── style.css                # Folha de estilos CSS (Vanilla CSS com variáveis globais)
├── script.js                # Lógica JavaScript pura (sem frameworks) de busca e filtros
└── README.md                # Este documento de documentação
```

---

## ✏️ Como Adicionar Novos Imóveis Manualmente

Para adicionar ou editar imóveis no catálogo, abra o arquivo `index.html` e procure pela tag de comentário correspondente. Você pode copiar o bloco de código de um card e alterar as informações.

### Estrutura de código do card de imóvel:

```html
<a href="LINK_DA_PAGINA_DO_IMOVEL_NO_SITE_BBUSINESS" target="_blank" class="card-item" data-category="CATEGORIA">
    <div class="card-image-wrapper">
        <img src="LINK_DA_FOTO_PRINCIPAL" alt="Título do Imóvel" class="card-image" onerror="this.src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'">
        <div class="card-tag">ETIQUETA (Ex: Destaque, Novo)</div>
    </div>
    <div class="card-content">
        <div class="card-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 7 12 7 12s7-6.75 7-12a8 8 0 0 0-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Cidade - UF</span>
        </div>
        <h3 class="card-title">Título do Imóvel</h3>
        <p class="card-description">Descrição resumida dos atrativos do imóvel...</p>
        
        <div class="card-features">
            <!-- Características como m², Quartos, Vagas de garagem -->
            <div class="feature-item">
                <span>150 m²</span>
            </div>
            <div class="feature-item">
                <span>3 Quartos</span>
            </div>
        </div>
        
        <div class="card-footer">
            <div class="card-price">
                <span class="price-label">Valor de venda</span>
                <span class="price-value">R$ 500.000</span>
            </div>
            <div class="card-btn">
                Ver Detalhes
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
        </div>
    </div>
</a>
```

> 💡 **Nota sobre as Categorias (`data-category`)**: Utilize uma das seguintes categorias para o correto funcionamento dos botões de filtros superiores:
> * `fazenda`
> * `casa`
> * `terreno`
> * `outro` (ex: Galpões, Prédios, Resorts)
