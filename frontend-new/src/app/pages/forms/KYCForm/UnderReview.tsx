// Import Dependencies
import { Link } from "react-router";
import { CSSProperties } from "react";

// Local Imports
import ReviewIllustration from "@/assets/illustrations/review.svg?react";
import { Button } from "@/components/ui";
import { useThemeContext } from "@/app/contexts/theme/context";

// ----------------------------------------------------------------------

export function UnderReview() {
  const theme = useThemeContext();
  
  return (
    <div className="h-full text-center">
      <ReviewIllustration
        className="mx-auto h-auto w-56 sm:w-64"
        style={
          {
            "--primary": theme.primaryColorScheme[600],
            "--darker": theme.darkColorScheme[600],
          } as CSSProperties
        }
      />
      <p className="dark:text-dark-50 mt-6 pt-4 text-xl font-semibold text-gray-800">
        ما فرم ارسال‌شده شما را دریافت کردیم
      </p>
      <p className="mx-auto mt-2 max-w-(--breakpoint-lg) text-balance sm:px-5">
        از ارسال اطلاعات فرم متشکریم. اطلاعات شخصی شما با موفقیت دریافت شد و به زودی مورد بررسی و احراز قرار خواهد گرفت.
        در صورت داشتن هرگونه سؤال یا نگرانی، لطفاً با ایمیل support@universalkyc.com تماس بگیرید.
      </p>
      <Button
        color="primary"
        className="mt-8 w-full px-10 sm:w-auto"
        to="/"
        component={Link}
      >
        بازگشت به خانه
      </Button>
    </div>
  );
}
