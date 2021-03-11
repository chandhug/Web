FROM cypress/browsers as build


ARG target_environment
ARG target_app
RUN echo "ARGS: "
RUN echo $target_app
RUN echo $target_environment

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
COPY . /usr/src/app

ENV CYPRESS_USER_USERNAME=nickm@withmehealth.com
ENV CYPRESS_USER_PASSWORD=0o@2Tvsis*E*
ENV CYPRESS_USER_LOGIN_UUID=a109029e-8012-417b-80e6-6bb9e5f930c1
ENV CYPRESS_USER_SERVICE_BASE_URL=http://user-test-service.test.svc.cluster.local:5000/user/api/v1/
ENV CYPRESS_RECORD_KEY=6219065b-a137-47f0-893f-c264763b62f2
ENV CYPRESS_LOGIN_PAGE_BASE_URL=https://apps.test.withmehealth.com/auth/login/
ENV CYPRESS_AUTHENTICATION_TEST_USERID=1215
ENV CYPRESS_AUTHENTICATION_TEST_USERNAME=chandhu@withmehealth.com

RUN npm cache verify
RUN npm install
RUN echo "nameserver 10.100.0.10 \nsearch svc.cluster.local cluster.local ec2.internal" > /etc/resolv.conf && npm run test-$target_app-$target_environment || exit 1
