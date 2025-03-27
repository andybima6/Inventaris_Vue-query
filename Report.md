# inventaris_ts

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


## Vue Query

### Get Data ( InventarisView )
```js
// Fetch Inventaris
const { data, isLoading, error } = useQuery({
  queryKey: ["inventaris"], // query key sifatnya bebas kita mmmau menentukan dengan nama apa,tetapi harus konsisten karebna untuk Invalidasi Cache
  queryFn: async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/inventaris");
    return response.data;
  },
});

```

### Destroy data ( KeranjangView )
```js

const { mutate: hapusInventaris } = useMutation({
  mutationFn: async (id) => {
    if (!confirm("Apakah Anda yakin ingin menghapus item ini?")) return;
    await axios.delete(`http://127.0.0.1:8000/api/inventaris/${id}`);
  },
  onSuccess: () => {
    queryClient.invalidateQueries(["inventaris"]); 
  },
  onSettled: async () => {
    await queryClient.refetchQueries(["inventaris"]); 
  }
});
```

### Post Data ( PesananSukses )
```js
// Vue Query untuk create data
const { mutate: createInventaris, isPending, isError, error } = useMutation({
  mutationFn: (newInventaris) => axios.post("http://127.0.0.1:8000/api/inventaris", newInventaris),
  onSuccess: () => {
    queryClient.invalidateQueries(["inventaris"]); 
    router.push("/inventaris"); 
  },
});

```

### Record output
```
https://jam.dev/c/d7b748e8-e388-47b6-a85f-1c27403f0cce
```