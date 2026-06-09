# Code-Konvention: Single Responsibility Principle

**Rework E-Commerce Platform | INFW25A**

---

## Was ist das Single Responsibility Principle?

Das Single Responsibility Principle (SRP) ist eines der fünf SOLID-Prinzipien und besagt:

> „Eine Klasse (oder Komponente) soll genau einen Grund haben, sich zu ändern."

Jede Einheit im Code — ob React-Komponente, Java-Klasse oder Funktion — ist für genau eine Aufgabe zuständig und kapselt eine klar abgegrenzte Verantwortung.

---

## Warum SRP für unser Projekt?

Unser Codebase ist bereits natürlich nach SRP strukturiert — diese Konvention formalisiert es:

- **Backend**: Controller, Service und Repository sind drei getrennte Schichten mit je einer Verantwortung
- **Frontend**: Komponenten rendern, Hooks fetchen, `lib`-Funktionen transformieren — nie alles zusammen
- **Wartbarkeit**: Änderungen in der Business-Logik berühren nicht das UI und umgekehrt
- **Lesbarkeit**: Jede Datei erklärt sich durch ihren Namen — `ProductCard` zeigt, `OrderService` verwaltet
- **Teamarbeit**: Weniger Merge-Konflikte durch klar getrennte Zuständigkeiten

---

## Beispiele

### Backend: Java / Spring Boot

#### ❌ Falsch — alles in einer Klasse

```java
// ProductController.java — macht zu viel
@RestController
public class ProductController {
    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable Long id) {
        // HTTP + Business-Logik + DB-Zugriff gemischt
        return productRepository.findById(id)
            .map(p -> { p.setPrice(p.getPrice() * 1.19); return p; })
            .orElseThrow(() -> new RuntimeException("Not found"));
    }
}
```

#### ✅ Richtig — eine Verantwortung pro Klasse

```java
// ProductController.java — nur HTTP-Handling
@RestController
@RequestMapping("/alexshop/products")
public class ProductController {
    @GetMapping("/id/{id}")
    public ResponseEntity<ProductDTO> getProductByID(@PathVariable int id) {
        return productService.getProductById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}

// ProductService.java — nur Business-Logik
public Optional<ProductDTO> getProductById(Integer id) {
    Optional<ProductEntity> productEntityOpt = productRepository.findById(id);
    return productMapper.getOptionalDTOFromOptionalEntity(productEntityOpt);
}
```

---

### Frontend: TypeScript / Next.js

#### ❌ Falsch — Komponente fetcht, formatiert und rendert

```tsx
// ProductCard.tsx — macht zu viel
export function ProductCard({ id }: { id: number }) {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then(setProduct);
  }, [id]);
  const price = product ? `CHF ${(product.price * 1.077).toFixed(2)}` : "";
  return (
    <div>
      {product?.name} — {price}
    </div>
  );
}
```

#### ✅ Richtig — jede Einheit hat eine Aufgabe

```tsx
// lib/api/productsApi.ts — nur API-Aufruf
export async function getProductById(id: number): Promise<Product> {
  return getJson<Product>(`/alexshop/products/id/${id}`);
}

// hooks/useFavorites.ts — nur Favoriten-State
export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const toggle = useCallback((item: FavoriteItem) => {
    /* ... */
  }, []);
  return { favorites, toggle, isFavorite, removeAll };
}

// components/ui/ProductCard.tsx — nur Rendering
export function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      {product.name} — CHF {product.price.toFixed(2)}
    </div>
  );
}
```

---

> **Faustregel:** Wenn du eine Datei mit „und" beschreiben musst, verletzt sie SRP. Teile sie auf.
