import Link from "next/link";
import Image from "next/image";
import {CustomButton} from "@/components/index";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={128}
                        height={128}
                        className="object-contain"
                    />
                    <p className="text-white font-bold text-[18px]">
                        Car Hub
                    </p>
                </Link>
                <CustomButton
                    title="Sing in"
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                />
            </nav>
        </header>
    );
};

export default Navbar;
