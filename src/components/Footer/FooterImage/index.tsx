import type { FC } from "react";
import { EnvironmentFilled, PhoneFilled } from "@ant-design/icons";
const FooterImage: FC = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex justify-between items-center max-sm:flex-col">
        <div className=" m-[23px] pr-[23px] border-b border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
          <h3 className="font-bold text-base mt-[17px] mb-[9px]"> 160 000</h3>
          <p className="font-light text-xs"> Foydalanuvchilar</p>
        </div>
        <div className="m-[23px] pr-[23px] border-b border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
          <h3 className="font-bold  text-base mt-[17px] mb-[9px]">88 000</h3>
          <p className="font-light text-xs"> To’garaklar</p>
        </div>
        <div className="m-[23px] pr-[23px] border-b border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
          <h3 className="font-bold text-base mt-[17px] mb-[9px]">2 090</h3>
          <p className="font-light text-xs">Malaka oshirganlar</p>
        </div>
        <div className=" m-[23px] pr-[23px] border-b border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
          <h3 className="font-bold text-base mt-[17px] mb-[9px]">3 090</h3>
          <p className="font-light text-xs">Video darslar</p>
        </div>
      </div>
      <div className="flex justify-between bg-[#46A3581A] p-6 max-lg:flex-col max-lg:items-center gap-2.5">
        <img
          src="https://babm.uz/thogeeck/2022/07/logo-babm.png"
          //   src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="Malaka Logo"
          className="w-[25%] h-[25%]"
        />
        <div className="flex gap-2.5 items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flocation.svg?alt=media&token=d600d0e4-aa9d-423d-8348-e3df90b195f3"
            alt="Location"
          />
          <p className="text-sm">
            Toshkent shahar, Chilonzor tumani, <br /> Katta Xirmontepa kochasi
            39A
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Femail.svg?alt=media&token=8136c940-c139-486f-a6d3-be49bede2381"
            alt="Contact"
          />
          <p>respublika@exat.uz</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcall.svg?alt=media&token=3841a4f9-b499-4e8c-98d3-a05fe4edc39f"
            alt="Phone"
          />
          <p>
            {" "}
            +998 71 217 18 72 <br /> +998 71 217 18 71
          </p>
        </div>
      </div>
      <div className="flex justify-between max-sm:flex-col p-7">
        <div className="gap-3 flex flex-1 flex-col">
          <h3 className="font-bold">Information</h3>
          <p className="font-light cursor-pointer">BABM haqida</p>
          <p className="font-light cursor-pointer">Video darslar</p>
          <p className="font-light cursor-pointer">Yo’riqnoma</p>
        </div>
        <div className="gap-3 flex flex-1 flex-col">
          <h3 className="font-bold">Categories</h3>
          <p className="font-light cursor-pointer">Madaniyat va San’at </p>
          <p className="font-light cursor-pointer">
            Texnika konstruktorlik va modellashtirish
          </p>
          <p className="font-light cursor-pointer">Jismoniy tarbiya va sport</p>
          <p className="font-light cursor-pointer">Turizm va ekologiya</p>
          <p className="font-light cursor-pointer">
            Hunarmandchilik va qo’l mehnati
          </p>
          <p className="font-light cursor-pointer">Xorijiy tillar</p>
          <p className="font-light cursor-pointer">
            Oliy ta’lim muassasalari va maktabga tayyorlov
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold">Social Media</h3>
          <div className="flex gap-3 mt-5">
            <div className="border border-[#46A35833] w-7 h-7 flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49"
                alt="Facebook"
              />
            </div>
            <div className="border border-[#46A35833] w-7 h-7 flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5"
                alt="Instagramm"
              />
            </div>
            <div className="border border-[#46A35833] w-7 h-7 flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835"
                alt="Twitter"
              />
            </div>
            <div className="border border-[#46A35833] w-7 h-7 flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=1ad547d5-0f83-4421-994e-6989dba5d0d7"
                alt="Linkedin"
              />
            </div>
            <div className="border border-[#46A35833] w-7 h-7 flex justify-center items-center cursor-pointer">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f"
                alt="Youtube"
              />
            </div>
          </div>
          <h3 className="font-bold mt-8">We Accept</h3>
          <div className="flex gap-3 mt-5">
            <img
              className="w-7 h-7 cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca"
              alt="Paypal"
            />
            <img
              className="w-7 h-7 cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a"
              alt="MasterCard"
            />
            <img
              className="w-7 h-7 cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2"
              alt="Visa"
            />
            <img
              className="w-7 h-7 cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=89c19c4a-9c33-4e7a-b802-a7f0ba10ef04"
              alt="American Express"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] p-3">
        <h3 className="text-center font-normal text-sm">
          © BABM | Barkamol avlod bolalar maktabi. Barcha huquqlar
          himoyalangan. Sayt ishlab chiqish: Eleven.uz
        </h3>
      </div>
    </div>
  );
};

export default FooterImage;
