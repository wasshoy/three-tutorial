# マテリアルとライティングについて

## マテリアル

- マテリアルは物体の質感の設定
- 質感は着色、画像の貼り付け、陰影、ライティングの反射などに影響

### 画像をマテリアルにする

- 画像マテリアル は texture が必要
- texture は loader.load(画像のパス)の返り値
- マテリアルの引数に{map:texture} を渡す
- 大きさは幅と高さがそれぞれ 2 の累乗である必要がある（GPU の制約より）

## ライティング

- 今回は`THREE.DirectionalLight`で光源を作成

### `THREE.DirectionalLight` 平行光源

- 指定した方向から光を当てられる

### `THREE.AmbientLight` 環境光

- 空間全体を照らす光

## 描画に必要なもの にそれぞれ必要なもの

- 物体(mesh) = 形(geometry) + 質感(material)
- シーン(scene) = 物体(mesh) + ライティング + ...
- レンダリング(render.render()) = シーン(scene) + カメラ(camera)
