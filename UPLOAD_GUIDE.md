# 📸 Sistema de Upload de Imagens

## Como Fazer Upload de Imagens na Área de Admin

Implementei um sistema completo de upload de imagens para o seu painel de administração. Aqui está como funciona:

### ✅ O Que Foi Feito

1. **Rota de API para Upload** (`/app/api/upload/route.ts`)
   - Aceita arquivos JPG, PNG e WebP
   - Limita tamanho máximo a 5MB
   - Salva as imagens na pasta `public/products/`
   - Gera nomes únicos para evitar conflitos

2. **Formulário Atualizado** (Adicionar/Editar Produtos)
   - Input de arquivo com suporte a drag-and-drop
   - Preview da imagem em tempo real
   - Feedback de carregamento
   - Validações de arquivo

### 🎯 Como Usar

#### **Adicionando um Novo Produto com Imagem:**

1. Clique em **"Adicionar Produto"** no painel admin
2. Preencha os dados do produto:
   - **Marca**: Apple, Samsung, etc.
   - **Modelo**: iPhone 13, Galaxy S22, etc.
   - **Armazenamento**: 128GB, 256GB, etc.
   - **Preço**: Valor em reais
   - **Condição**: Seminovo - Excelente/Bom/Regular
   - **Status**: Disponível ou Vendido

3. **Clique no campo de imagem** ou arraste um arquivo para fazer upload
4. Aguarde o upload e veja o preview aparecer
5. Clique em **"Adicionar Produto"** para salvar

#### **Editando um Produto Existente:**

1. Na tabela de produtos, clique no ícone de lápis (Editar)
2. Para atualizar a imagem, clique no campo de imagem
3. Selecione uma nova imagem
4. Clique em **"Atualizar Produto"**

### 📋 Especificações Técnicas

- **Formatos Aceitos**: JPG, JPEG, PNG, WebP
- **Tamanho Máximo**: 5MB
- **Local de Armazenamento**: `public/products/`
- **Nomenclatura**: Automática com timestamp (ex: `1705689600000-abc123.jpg`)
- **URL Gerada**: `/products/[nome-arquivo]`

### 🔧 Mudanças Realizadas

#### Arquivos Criados:
- `app/api/upload/route.ts` - Rota para processar uploads

#### Arquivos Modificados:
- `app/admin/page.tsx` - Adicionado suporte a upload com preview

### ⚠️ Considerações Importantes

1. **Backup de Imagens**: As imagens são salvas em `public/products/`. Faça backup regularmente.
2. **Limpeza de Antigos**: As imagens antigas não são deletadas automaticamente. Você pode deletar manualmente arquivos não utilizados na pasta `public/products/`.
3. **Tamanho da Pasta**: Monitore o tamanho da pasta `public/products/` conforme adiciona mais imagens.

### 🚀 Próximos Passos (Opcional)

Se quiser melhorias futuras, pode considerar:
- Compressão automática de imagens
- Suporte a múltiplas imagens por produto
- Página de galeria para gerenciar imagens
- Integração com serviço em nuvem (AWS S3, Cloudinary, etc.)

---

**Pronto!** Agora você pode fazer upload de imagens direto no painel admin! 🎉
