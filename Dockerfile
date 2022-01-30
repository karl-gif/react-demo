FROM registry.access.redhat.com/ubi7/nodejs-12

WORKDIR /opt/app-root

#USER root

COPY . .

#RUN npm install --only=prod && fix-permissions ./ && npm run build
RUN  npm install  && fix-permissions ./  &&   npm run build

EXPOSE 3000

USER root

RUN chgrp -R 0 /opt/app-root && \
    chmod -R g=u /opt/app-root && \
    chown -R 1001:0 /opt/app-root

USER 1001

CMD ["sh", "-c", "echo 'sleep 90' && sleep 2 && npm start"]