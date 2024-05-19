import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/8bf799c1-5580-4e5b-a101-00777516e7dc-eqimza.png",
  "https://utfs.io/f/0e79f444-9284-494b-97ca-53a61243803b-mexrpb.jpg",
  "https://utfs.io/f/0ee8305c-78f3-4d14-a77d-c52ebd70cf58-g1tb1c.jpg",
  "https://utfs.io/f/658ad016-6158-47d3-9a46-da5b91e81a13-1eg55a.jpeg",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
