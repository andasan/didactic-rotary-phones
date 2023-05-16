import { toPng } from 'html-to-image';

toPng('https://www.npmjs.com/package/html-to-image')
      .then((dataUrl) => {
        // setImageSrc(dataUrl);
        console.log(dataUrl)
      })
      .catch((error) => {
        console.error('Screenshot error:', error);
      });

export const dataSet = [
  {
    name:"Atena",
    url:"https://keep-atenahatta.vercel.app",
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  { 
    name: "Ayaka", 
    url: "https://react-final-term-project.vercel.app/", 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Daiki", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Gyunay", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Hana", 
    url: null,
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Haruka", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Haru", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Joe", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Jun", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Kazuki", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Kota", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Masashi", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Mathias", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Paulo", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Ron", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Vivian", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Yuno", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  },
  {
    name: "Yuya", 
    url: null, 
    thumb: "https://lh3.googleusercontent.com/classroom/AFOJE20vXuGV_2K3lxJCA5F4vD813KiCRs5ecpTqFbRSiXQ-cAE7Mmp9QTxsZRCxpAt9vmrDl_eT5JVmrIbcL9IOxwe0lscqNFPUA8XHFM4_aKVKC3aGXEcDQKEI8PZ4WNibCosiN8FinhM7kyk6fAit2QYnuPWa9gWMkid3m5ZBaFYFpl0UCKBYUuspBGQhr0onVZIvC-RkBrFRZ1s9zw=w105-h70-pd"
  }
]