const baseUrl = `http://127.0.0.1:3000`

const relationship = (parent, child, parentId = null) => {
    if (parentId) return `${parent}/${parentId}?_embed=${child}`
    else return `${parent}?_embed=${child}`
} 

const wholeUrl = `http://127.0.0.1:3000/posts/?_embed=comments`

/*
{
  "id": "l6th8mb4jq47me1qjpl",
  "title": "Dignissimos beatae p",
  "description": "Cupidatat dolor reru",
  "comments": [
    {
      "id": "l6thad53svcj4xla0lq",
      "comment": "Non sunt dolorum ad",
      "postId": "l6th8mb4jq47me1qjpl"
    }
  ]
}

*/