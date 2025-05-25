"use client";

import { getPostLikeData, likePost, unLikePost } from "@/lib/actions/like";
import { SessionUser } from "@/lib/session";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";

type Props = {
  postId: number;
  user?: SessionUser;
};
const Like = (props: Props) => {
  const { data, refetch: refetchPostLikeData } = useQuery({
    queryKey: ["GET_POST_LIKE_DATA", props.postId],
    queryFn: async () => await getPostLikeData(props.postId),
  });

  const likeMutation = useMutation({
    mutationFn: () => likePost(props.postId),
    onSuccess: () => refetchPostLikeData(),
  });

  const unlikeMutation = useMutation({
    mutationFn: () => unLikePost(props.postId),
    onSuccess: () => refetchPostLikeData(),
  });

  return (
    <div className="mt-3 flex items-center justify-start gap-2">
      {data?.userLikedPost ? (
        <button onClick={() => unlikeMutation.mutate()}>
          <Heart fill="currentColor" className="w-6 text-red-500" />
        </button>
      ) : (
        <button onClick={() => likeMutation.mutate()}>
          <Heart className="w-6" />
        </button>
      )}
      <p className="text-slate-600">{data?.likeCount}</p>
    </div>
  );
};

export default Like;