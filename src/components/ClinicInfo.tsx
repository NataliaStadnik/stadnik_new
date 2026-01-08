import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { useState, type FC, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

interface ContactPageProps {
  children?: ReactNode;
}

const ClinicInfo: FC<ContactPageProps> = ({ children }) => {
  const { t } = useTranslation();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="py-20 bg-zen-sky/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            {children}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-zen-white flex items-center justify-center text-zen-sage shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-zen-text mb-1">
                    {t("contacts.location")}
                  </h3>
                  <p className="flex flex-col text-zen-text/70">
                    <span>{t("contacts.address")}</span>
                    <span>{t("contacts.city")}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-zen-white flex items-center justify-center text-zen-sage shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-zen-text mb-1">
                    {t("contacts.time")}
                  </h3>
                  <p className="flex flex-col text-zen-text/70">
                    <span>{t("contacts.days")}</span>
                    <span>{t("contacts.weekend")}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-zen-white flex items-center justify-center text-zen-sage shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-zen-text mb-1">
                    {t("contacts.contacts")}
                  </h3>
                  <div className="flex flex-col text-zen-text/70">
                    <a href="tel:+375173886011">+375 (17) 388-60-11</a>
                    <a href="tel:+375296230011">+375 (29) 623-00-11</a>

                    <a href="mailto:info@vinir.by" className="mt-2">
                      info@vinir.by
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="h-[400px] rounded-2xl overflow-hidden relative border border-zen-sage/20 shadow-[0px_5px_20px_rgba(0,0,0,0.15)]"
          >
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zen-white/50">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-zen-sage mx-auto mb-4" />
                  <span className="text-zen-text/50 uppercase tracking-widest text-sm">
                    {t("contacts.map_loading")}
                  </span>
                </div>
              </div>
            )}
            <YMaps query={{ apikey: "33d6e281-2c21-44b3-8813-632f64604653" }}>
              <Map
                defaultState={{
                  center: [53.906356725097574, 27.485196695989668],
                  zoom: 15,
                }}
                className="h-[400px] shrink-0 w-full"
                width="100%"
                height="400px"
                onLoad={() => setMapLoaded(true)}
              >
                <Placemark
                  geometry={[53.906356725097574, 27.485196695989668]}
                />
              </Map>
            </YMaps>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
