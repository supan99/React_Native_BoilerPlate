// import {Alert, Platform, StyleSheet} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';

// export const ImagePickerType = {
//   CAMERA: 1,
//   GALLERY: 2,
// };

// const showImagePicker = (type: number) => {
//   const RequestObject = {mediaType: "photo"};

//   switch (type) {
//     case ImagePickerType.CAMERA:
//       return ImagePicker.openCamera(RequestObject);
//     case ImagePickerType.GALLERY:
//       return ImagePicker.openPicker(RequestObject);
//   }
// };

// const selectImage = (type: number, resolve: any, reject: any) => {
//   showImagePicker(type)
//     .then(res => {
//       resolve({
//         filename: res.filename,
//         url: res.path,
//       });
//     })
//     .catch(reject);
// };

// const GImagePicker = () => {
//   return new Promise((resolve, reject) => {
//     Alert.alert(
//       'SELECT IMAGE',
//       '',
//       Platform.select({
//         android: [
//           {
//             text: 'CANCEL',
//             onPress: () => {
//               reject('cancel selecting image');
//             },
//             style: 'destructive',
//           },
//           {
//             text: 'CAMERA',
//             onPress: () => selectImage(ImagePickerType.CAMERA, resolve, reject),
//           },
//           {
//             text: 'GALLERY',
//             onPress: () =>
//               selectImage(ImagePickerType.GALLERY, resolve, reject),
//           },
//         ],
//         ios: [
//           {
//             text: 'CAMERA',
//             onPress: () => selectImage(ImagePickerType.CAMERA, resolve, reject),
//           },
//           {
//             text: 'GALLERY',
//             onPress: () =>
//               selectImage(ImagePickerType.GALLERY, resolve, reject),
//           },
//           {
//             text: 'CANCEL',
//             onPress: () => {},
//             style: 'destructive',
//           },
//         ],
//       }),
//     );
//   });
// };
// export {GImagePicker};
// export default GImagePicker;
