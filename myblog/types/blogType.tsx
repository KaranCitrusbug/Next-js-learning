export interface blogDetailProps {
      id: string,
      title: string,
      body: string,
      image :string,
      tags: string[],
      reactions: {likes: number ,dislikes: number },
      views: number,
      userId: number,
}